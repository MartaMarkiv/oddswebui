import {ViewWrapper, Title, SettingsImage} from "./styles";

export const EmptyView = () => {
    return <ViewWrapper>
        <Title>
            You can build your own board. Click <SettingsImage /> and select content you would like to see.
        </Title>
    </ViewWrapper>
};