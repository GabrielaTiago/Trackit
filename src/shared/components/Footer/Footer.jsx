import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import { GoTo } from "../GoTo/GoTo";
import {
  useHabitsContext,
  useProgressContext,
} from "../../contexts";

export function Footer() {
  const navigate = useNavigate();
  const { progress, setProgress } = useProgressContext();
  const { todayHabits } = useHabitsContext();
  
  const fillProgress = useCallback(() => {
    let progressValue = todayHabits.map((value) => (value.done ? 1 : 0));

    if (progressValue.length > 0) {
      progressValue = progressValue.reduce(
        (acumulator, current) => acumulator + current
      );
    }

    setProgress(Math.round((progressValue * 100) / todayHabits.length));
  }, [todayHabits, setProgress]);

  useEffect(() => {
    fillProgress();
  }, [fillProgress]);

  return (
    <Container>
      <GoTo to={"/habitos"} text={"Hábitos"} />
      <Progress onClick={() => navigate("/hoje")}>
        <CircularProgressbar
          text={"Hoje"}
          value={progress}
          background
          backgroundPadding={5}
          styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#ffffff",
            pathColor: "#ffffff",
            trailColor: "transparent",
          })}
        />
      </Progress>
      <GoTo to={"/historico"} text={"Histórico"} />
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  max-height: 70px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  font-family: "Lexend Deca";
  font-size: 18px;
  color: #52b6ff;
`;

const Progress = styled.div`
  width: 91px;
  height: 91px;
  margin-bottom: 40px;
`;
