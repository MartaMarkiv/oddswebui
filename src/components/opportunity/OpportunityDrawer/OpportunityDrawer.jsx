import {useState} from "react";
import {Space} from "antd";
import {OpportunityList} from "../OpportunityList";
import {DrawerStyled, OpportunityButton, StarIcon, CloseIcon} from "./styles";
import {Switcher} from "../../Switcher";
import {useSetDrawerOpened} from "../../../shared/context/CommonProvider";
import {DRAWER_WIDTH} from "../../../constants";

export const OpportunityDrawer = () => {
    const setDrawerOpened = useSetDrawerOpened();
    const [visible, setVisible] = useState(false);

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
                visible={visible}
            >
                <OpportunityList />
            </DrawerStyled>
        </>
    )
};