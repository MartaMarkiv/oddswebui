import {useState, useEffect} from "react";
import {Space} from "antd";
import { w3cwebsocket as WebSocket } from "websocket";
import {OpportunityList} from "../OpportunityList";
import {DrawerStyled, OpportunityButton, StarIcon, CloseIcon} from "./styles";
import {Switcher} from "../../Switcher";
import {SubTitle} from "../../typography/SubTitle/SubTitle";
import {useSetDrawerOpened} from "../../../shared/context/CommonProvider";
import {DRAWER_WIDTH, OPPORTUNITY} from "../../../constants";
import {parser} from "../utils";


const client = new WebSocket(OPPORTUNITY);

export const OpportunityDrawer = ({
    changeSelectedKey,
    selectedKey,
    setCollection,
    collection
}) => {

    const setDrawerOpened = useSetDrawerOpened();
    const [visible, setVisible] = useState(false);

    const connectSocket = () => {

        client.onmessage = (event) => {
            const json = JSON.parse(event.data);
            const parsedData = json.length ? parser(json[0].games) : null;
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
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
        setDrawerOpened(false)
    };

    const switchHandler = (value) => {
        console.log(value);
    }

    return (
        <>
            <OpportunityButton onClick={showDrawer}>
                <StarIcon />
            </OpportunityButton>
            <DrawerStyled
                title="Opportunity"
                placement="right"
                closable
                mask={false}
                width={DRAWER_WIDTH}
                closeIcon={<CloseIcon />}
                extra={
                    <Space>
                        <Switcher leftText="All"
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
                open={visible}
            >
                {
                    collection ?
                        <OpportunityList
                            opportunities={collection}
                            selectOpportunity={changeSelectedKey}
                            selectedOpportunity={selectedKey}
                        /> :
                        <SubTitle>No opportunity right now</SubTitle>
                }
            </DrawerStyled>
        </>
    )
};