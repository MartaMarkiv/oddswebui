import { ReactComponent as TimeIcon } from '../../assets/icons/time.svg';
import {TimeoutBadgeContainer} from "./styles";

export const TimeoutBadge = ({size}) => {
    return <TimeoutBadgeContainer size={size}>
        <TimeIcon title="Timeout"/>
    </TimeoutBadgeContainer>
};