import {useEffect, useState} from "react";
import {List, ListItem, OpportunityListContainer} from "./styles";
import {PendingScreen} from "../../PendingScreen";
import {OpportunityItem} from "../OpportunityItem";
import {parser} from "../utils";

export const OpportunityList = ({opportunities}) => {

    const [data, setData] = useState([]);
    const [pending, setPending] = useState(false);

    const [selectedItem, setSelectedItem] = useState();

    useEffect(() => {
        if(selectedItem) {
            console.log('Select: ', selectedItem);
        }
    }, [selectedItem]);


    const loadData = async () => {
        setPending(true);
        const parsedData = parser(opportunities.length && opportunities[0].games);
        setData(parsedData);
        setPending(false);
    }

    useEffect(() => {
        loadData();
    }, [])

    return <OpportunityListContainer>
        {
            pending && <PendingScreen position="absolute" />
        }
        <List>
            {
                data?.map((item) => {
                    return <ListItem key={item.id}>
                        <OpportunityItem data={item} selected={selectedItem} onSelect={setSelectedItem} />
                    </ListItem>
                })
            }
        </List>
    </OpportunityListContainer>
}