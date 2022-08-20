import {useState} from "react";
import {Space} from "antd";
import {OpportunityList} from "../OpportunityList";
import {DrawerStyled, OpportunityButton, StarIcon} from "./styles";
import {Switcher} from "../../Switcher";


export const OpportunityDrawer = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
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
                width={440}
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