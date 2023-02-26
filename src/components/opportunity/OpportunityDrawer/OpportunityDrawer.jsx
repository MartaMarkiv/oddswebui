import {useState, useEffect} from "react";
import {Space} from "antd";
import { w3cwebsocket as WebSocket } from "websocket";
import {OpportunityList} from "../OpportunityList";
import {DrawerStyled, OpportunityButton, StarIcon, CloseIcon, OpportunitiesWrapper} from "./styles";
import {Switcher} from "../../Switcher";
// import {useSetDrawerOpened} from "../../../shared/context/CommonProvider";
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
    visible,
    setVisible
}) => {

    // const setDrawerOpened = useSetDrawerOpened();
    // const [visible, setVisible] = useState(true);
    const [loading, setLoading] = useState(true);

    const [showAll, setShowAll] = useState(true);

    const connectSocket = () => {

        client.onopen =(() => {
            setLoading(false);
            setVisible(true);
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

    const switchHandler = (value) => {
        setShowAll(value === "all");
    }

    const list = showAll ? collection : arbitrageFilter(collection);

    return (
        <>
            <OpportunityButton onClick={()=>setVisible(true)} disabled={!(isProp || isPopular)}>
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
                onClose={()=>setVisible(false)}
                open={visible}
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
                                    switchHandler={switchHandler}
                                />
                            }
                        </OpportunitiesWrapper>
                            
                }
            </DrawerStyled>
        </>
    )
};