import React from 'react';

type AppPropsType = {
    topCars: TopCarsType[]
}
type TopCarsType = {
    manufacturer: string,
    model: string
}

export const Cars = (props: AppPropsType) => {
    return (
            <table>
                {props.topCars.map((m, index) => { return (
                <tr key={index}>
                <th>{index + 1}</th>
                <th>{m.manufacturer}</th>
                <th>{m.model}</th>
                </tr>
                )})}

            </table>
    )

};
