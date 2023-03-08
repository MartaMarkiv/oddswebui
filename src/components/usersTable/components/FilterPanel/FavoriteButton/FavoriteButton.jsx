import {FavoriteButtonStyled} from "./styles";
import { ReactComponent as FavoriteIcon } from '../../../../../assets/icons/favorite.svg';

export const FavoriteButton = () => {
    return <FavoriteButtonStyled>
        <FavoriteIcon />
    </FavoriteButtonStyled>
};