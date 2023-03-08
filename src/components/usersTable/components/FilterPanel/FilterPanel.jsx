import {
    DrawerStyled,
    CloseIcon,
    SettingsTitle
} from "./styles";
import { ViewSettings } from "../../../ViewSettings"

export const FilterPanel = ({
    isOpenFilter,
    toggleFilter,
    isProp,
    isPopular,
    setPropFeedView,
    setPopularFeedView
}) => {

    const closeFilter = () => {
        toggleFilter(false);
    }

    return (
        <DrawerStyled
            placement="top"
            closable
            mask={false}
            height={100}
            closeIcon={<CloseIcon />}
            onClose={closeFilter}
            open={isOpenFilter}
        >
            <SettingsTitle>Display settings:</SettingsTitle>
            <ViewSettings
                isProp={isProp}
                isPopular={isPopular}
                setPropFeedView={setPropFeedView}
                setPopularFeedView={setPopularFeedView}
            />
        </DrawerStyled>
    )
}