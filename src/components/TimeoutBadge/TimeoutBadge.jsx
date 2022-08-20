import { ReactComponent as TimeIcon } from '../../assets/icons/time.svg';
import {TimeoutBadgeContainer} from "./styles";

export const TimeoutBadge = ({size}) => {
    return <TimeoutBadgeContainer size={size}>
        <TimeIcon />
        {size !== 'small' && <span className="text">Timeout</span>}
    </TimeoutBadgeContainer>
};