import {SettingsBoxStyled, CheckBoxStyled, Label} from "./styles";

export const ViewSettings = ({isTable, isProp, isPopular}) => {
    return <SettingsBoxStyled>
        <CheckBoxStyled>
            <Label>Table</Label>
        </CheckBoxStyled>
        <CheckBoxStyled>
            <Label>Prop feed</Label>
        </CheckBoxStyled>
        <CheckBoxStyled>
            <Label>Popular feed</Label>
        </CheckBoxStyled>
    </SettingsBoxStyled>
}