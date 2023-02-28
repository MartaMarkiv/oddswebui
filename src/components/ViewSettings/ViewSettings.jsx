import {SettingsBoxStyled, CheckBoxStyled, Label} from "./styles";

export const ViewSettings = ({
    isTable,
    isProp,
    isPopular,
    setTableView,
    setPropFeedView,
    setPopularFeedView
}) => {
    
    return <SettingsBoxStyled>
        <CheckBoxStyled checked={isTable} onChange={e=>setTableView(e.target.checked)}>
            <Label>Table</Label>
        </CheckBoxStyled>
        <CheckBoxStyled checked={isProp} onChange={e=>setPropFeedView(e.target.checked)}>
            <Label>Prop feed</Label>
        </CheckBoxStyled>
        <CheckBoxStyled checked={isPopular} onChange={e=>setPopularFeedView(e.target.checked)}>
            <Label>Popular feed</Label>
        </CheckBoxStyled>
    </SettingsBoxStyled>
}