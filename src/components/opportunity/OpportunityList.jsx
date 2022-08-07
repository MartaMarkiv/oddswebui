import styled from "styled-components";
import {useEffect, useState} from "react";
import {PendingScreen} from "../PendingScreen";
import {OpportunityItem} from "./OpportunityItem";

const OpportunityListContainer = styled.div``;
const List = styled.ul`
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li`
  display: block;
  margin-bottom: 12px;  
`;

export const OpportunityList = () => {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(false);

    const [selectedItem, setSelectedItem] = useState();

    useEffect(() => {
        console.log('Select: ', selectedItem);
        if(selectedItem) {
            console.log('Select: ', selectedItem);
        }
    }, [selectedItem]);


    const loadData = async () => {
        setPending(true);
        const res = await new Promise((resolve) => {
            setTimeout(() => {
                resolve([{id: 1}, {id: 2}, {id: 3}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}, {id: 12}])
                setPending(false);
            }, 200)
        });

        setData(res)
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
                data?.map(item => {
                    return <ListItem key={item.id}>
                        <OpportunityItem data={item} selected={selectedItem} onSelect={setSelectedItem} />
                    </ListItem>
                })
            }
        </List>
    </OpportunityListContainer>
}