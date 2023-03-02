import {useState, useEffect, useContext} from "react";
import {Space} from "antd";
import { w3cwebsocket as WebSocket } from "websocket";
import {OpportunityList} from "../OpportunityList";
import {DrawerStyled, OpportunityButton, StarIcon, CloseIcon, OpportunitiesWrapper} from "./styles";
import {Switcher} from "../../Switcher";
import {CommonContext} from "../../../shared/context/CommonProvider";
import {PendingScreen} from "../../../components/PendingScreen";
import {DRAWER_WIDTH, MULTI_DRAWER_WIDTH, OPPORTUNITY} from "../../../constants";
import {parser, arbitrageFilter} from "../utils";

const client = new WebSocket(OPPORTUNITY);

export const OpportunityDrawer = ({
    changeSelectedKey,
    selectedKey,
    setCollection,
    collection,
    isProp,
    isPopular,
}) => {

    const { setDrawerOpened, drawerOpened } = useContext(CommonContext);

    const [loading, setLoading] = useState(true);

    const [showAll, setShowAll] = useState(true);

    const connectSocket = () => {

        client.onopen =(() => {
            setLoading(false);
            setDrawerOpened(true);
        });

        client.onmessage = (event) => {
            const json = JSON.parse(event.data);
            
            const allOpportunities = json.length ? json.map(item => item.games).flat() : [];

            const parsedData = parser(allOpportunities);
            setCollection(parsedData);
        };

        client.onerror = () => {
            console.log("Opportunity socket connection error");
        };
    }

    useEffect(() => {
        connectSocket();
    }, []);

    const showDrawer = () => {
        setDrawerOpened(true)
    };

    const onClose = () => {
        setDrawerOpened(false)
    };

    const switchHandler = (value) => {
        setShowAll(value === "all");
    }

    const list = showAll ? collection : arbitrageFilter(collection);

    return (
        <>
            <OpportunityButton onClick={showDrawer} disabled={!(isProp || isPopular)}>
                <StarIcon />
            </OpportunityButton>
            <DrawerStyled
                placement="right"
                closable
                mask={false}
                width={isProp&&isPopular ? MULTI_DRAWER_WIDTH : DRAWER_WIDTH}
                closeIcon={<CloseIcon />}
                extra={
                    <Space>
                        <Switcher
                            leftText="All"
                            rightText="Arbs"
                            name="opportunity"
                            leftValue="all"
                            rightValue="arbs"
                            initialValue="all"
                            onUpdate={switchHandler}
                        />
                    </Space>
                }
                onClose={onClose}
                open={drawerOpened}
                >
                {
                    loading ? 
                        <PendingScreen position={"absolute"}/> :
                        collection && collection.length &&
                        <OpportunitiesWrapper>
                            { isProp && 
                                <OpportunityList
                                    opportunities={list}
                                    selectOpportunity={changeSelectedKey}
                                    selectedOpportunity={selectedKey}
                                    allList={showAll}
                                    name="Prop"
                                />
                            }
                            { isPopular &&
                                <OpportunityList
                                    opportunities={list}
                                    selectOpportunity={changeSelectedKey}
                                    selectedOpportunity={selectedKey}
                                    allList={showAll}
                                    name="Popular"
                                />
                            }
                        </OpportunitiesWrapper>
                            
                }
            </DrawerStyled>
        </>
    )
};