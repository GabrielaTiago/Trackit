import axios from "axios";
import styled from 'styled-components';
import { BsCheckLg } from "react-icons/bs";

export default function AllTodayHabits({ todayHabits, setTodayHabits, tasks }) {

    function IsDone(id, index) {
        const localValue = todayHabits[index];
        
        const config = { headers: { Authorization: `Bearer ${tasks.token}` } };
        
        if (localValue.done === true) {

            localValue.done = !localValue.done;
            localValue.currentSequence = localValue.currentSequence - 1;
            localValue.highestSequence = localValue.highestSequence - 1;

            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config);

            promise.then(() => setTodayHabits([...todayHabits]));
            promise.catch((res) => alert(`${res.response.data.message}`));
        }
        else {

            localValue.done = !localValue.done;
            localValue.currentSequence = localValue.currentSequence + 1;
            localValue.highestSequence = localValue.highestSequence + 1;

            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config);

            promise.then(() => setTodayHabits([...todayHabits]));
            promise.catch((res) => alert(`${res.response.data.message}`));
        }
    }

    return (
        <>
            {todayHabits.map((value, index) =>
                <TodayTask key={index}>
                    <TodayData>
                        <h3>{value.name}</h3>
                        <Goals >
                            <h4>Sequência atual: {value.currentSequence} dias</h4>
                            <h4>Seu recorde: {value.highestSequence} dias</h4>
                        </Goals>
                    </TodayData>
                    <Check index={index} selected={value.done} id={value.id} onClick={() => { IsDone(value.id, index); }}><BsCheckLg /></Check>
                </TodayTask>
            )}
        </>
    );
}

const TodayTask = styled.div`
    width: 100%;
    min-height: 94px;
    padding: 13px 13px 12px 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;

`
const TodayData = styled.div`
    display: flex;
    flex-direction: column;

    h4{
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

`

const Check = styled.div`
    width: 69px;
    height: 69px;
    background-color: ${(props) => props.selected ? "#8FC549" : "#EBEBEB"};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 40px;
`

const Goals = styled.div`
    margin-top: 7px;

    h4{
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
`