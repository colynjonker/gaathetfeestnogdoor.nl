import axios from "axios";
import useSWR from "swr";
import { PieChart, Pie, Tooltip, Sector, Cell, ResponsiveContainer } from 'recharts';


export default function Drankjes({data}:any) {
    return (
        <>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <PieChart width={400} height={400}>
                            <Pie
                                dataKey="value"
                                data={data}
                                outerRadius={80}
                                fill="#cb125d"
                                label>

                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
        </>
    )
}

