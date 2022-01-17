import { useState, useEffect } from "react";
import axios from "axios";
import api from "../assets/api";
import {
    BarController,
    LinearScale,
    BarElement,
    TimeScale,
    Tooltip,
    LineController,
    CategoryScale,
    PointElement,
    LineElement,
} from "chart.js";
import { ReactChart } from "chartjs-react";

ReactChart.register(
    BarController,
    LinearScale,
    BarElement,
    TimeScale,
    Tooltip,
    LineController,
    CategoryScale,
    PointElement,
    LineElement
);

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const Data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        axios
            .get(`${api.api}/dashboard`)
            .then(function (response) {
                for (let vote of response.data.message) {
                    Data[vote.value] += 1;
                }
                console.log(Data);
                setData(Data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <ReactChart
                type="bar"
                data={{
                    labels: [
                        "Rate 0",
                        "Rate 1",
                        "Rate 2",
                        "Rate 3",
                        "Rate 4",
                        "Rate 5",
                        "Rate 6",
                        "Rate 7",
                        "Rate 8",
                        "Rate 9",
                        "Rate 10",
                    ],
                    datasets: [
                        {
                            label: "",
                            data: data,
                            backgroundColor: [
                                "rgb(229, 30, 19)",
                                "rgb(255, 74, 25)",
                                "rgb(255, 101, 35)",
                                "rgb(255, 154, 45)",
                                "rgb(255, 206, 42)",
                                "rgb(255, 237, 38)",
                                "rgb(229, 230, 35)",
                                "rgb(182, 255, 32)",
                                "rgb(132, 255, 43)",
                                "rgb(94, 255, 31)",
                                "rgb(63, 255, 33)",
                            ],
                            borderWidth: 1,
                            borderColor: "#777",
                            hoverBorderWidth: 3,
                            hoverBorderColor: "#000",
                        },
                    ],
                }}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Votes",
                            font: {
                                size: 16,
                            },
                        },
                        legend: {
                            display: true,
                            labels: {
                                boxWidth: 0,
                            },
                            title: {
                                text: "Votes",
                                display: true,
                                font: {
                                    size: 16,
                                },
                                color: "rgba(255, 99, 132, 1)",
                            },
                        },
                    },
                    scales: {
                        y: {
                            min: 0,
                            max: 20,
                            ticks: {
                                callback: (value: any) => {
                                    return value;
                                },
                            },
                        },
                    },
                    animations: {
                        tension: {
                            duration: 3000,
                            easing: "easeInOutSine",
                            from: 0.4,
                            to: 0.2,
                            loop: true,
                        },
                    },
                }}
                height={140}
            />
        </div>
    );
};

export default Dashboard;
