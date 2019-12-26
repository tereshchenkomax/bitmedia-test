import React, {useState, useEffect} from 'react';
import {Breadcrumbs, BreadcrumbsItem} from "react-breadcrumbs-dynamic";
import request from "../../helpers/request";
import Header from "../../Header";

import { ResponsiveLine } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
	{
		"id": "japan",
		"color": "hsl(254, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 45
			},
			{
				"x": "helicopter",
				"y": 242
			},
			{
				"x": "boat",
				"y": 91
			},
			{
				"x": "train",
				"y": 134
			},
			{
				"x": "subway",
				"y": 20
			},
			{
				"x": "bus",
				"y": 194
			},
			{
				"x": "car",
				"y": 237
			},
			{
				"x": "moto",
				"y": 23
			},
			{
				"x": "bicycle",
				"y": 232
			},
			{
				"x": "horse",
				"y": 235
			},
			{
				"x": "skateboard",
				"y": 154
			},
			{
				"x": "others",
				"y": 261
			}
		]
	},
	{
		"id": "france",
		"color": "hsl(321, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 131
			},
			{
				"x": "helicopter",
				"y": 159
			},
			{
				"x": "boat",
				"y": 4
			},
			{
				"x": "train",
				"y": 45
			},
			{
				"x": "subway",
				"y": 230
			},
			{
				"x": "bus",
				"y": 285
			},
			{
				"x": "car",
				"y": 228
			},
			{
				"x": "moto",
				"y": 219
			},
			{
				"x": "bicycle",
				"y": 130
			},
			{
				"x": "horse",
				"y": 170
			},
			{
				"x": "skateboard",
				"y": 176
			},
			{
				"x": "others",
				"y": 274
			}
		]
	},
	{
		"id": "us",
		"color": "hsl(207, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 240
			},
			{
				"x": "helicopter",
				"y": 226
			},
			{
				"x": "boat",
				"y": 132
			},
			{
				"x": "train",
				"y": 60
			},
			{
				"x": "subway",
				"y": 236
			},
			{
				"x": "bus",
				"y": 1
			},
			{
				"x": "car",
				"y": 8
			},
			{
				"x": "moto",
				"y": 116
			},
			{
				"x": "bicycle",
				"y": 196
			},
			{
				"x": "horse",
				"y": 75
			},
			{
				"x": "skateboard",
				"y": 299
			},
			{
				"x": "others",
				"y": 52
			}
		]
	},
	{
		"id": "germany",
		"color": "hsl(125, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 97
			},
			{
				"x": "helicopter",
				"y": 145
			},
			{
				"x": "boat",
				"y": 128
			},
			{
				"x": "train",
				"y": 27
			},
			{
				"x": "subway",
				"y": 262
			},
			{
				"x": "bus",
				"y": 151
			},
			{
				"x": "car",
				"y": 139
			},
			{
				"x": "moto",
				"y": 162
			},
			{
				"x": "bicycle",
				"y": 282
			},
			{
				"x": "horse",
				"y": 197
			},
			{
				"x": "skateboard",
				"y": 39
			},
			{
				"x": "others",
				"y": 154
			}
		]
	},
	{
		"id": "norway",
		"color": "hsl(11, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 134
			},
			{
				"x": "helicopter",
				"y": 199
			},
			{
				"x": "boat",
				"y": 148
			},
			{
				"x": "train",
				"y": 108
			},
			{
				"x": "subway",
				"y": 4
			},
			{
				"x": "bus",
				"y": 173
			},
			{
				"x": "car",
				"y": 289
			},
			{
				"x": "moto",
				"y": 209
			},
			{
				"x": "bicycle",
				"y": 124
			},
			{
				"x": "horse",
				"y": 108
			},
			{
				"x": "skateboard",
				"y": 169
			},
			{
				"x": "others",
				"y": 161
			}
		]
	}
]


const MyResponsiveLine = ({ data /* see data tab */ }) => (
	<ResponsiveLine
		data={data}
		margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
		xScale={{ type: 'point' }}
		yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
		axisTop={null}
		axisRight={null}
		axisBottom={{
			orient: 'bottom',
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'transportation',
			legendOffset: 36,
			legendPosition: 'middle'
		}}
		axisLeft={{
			orient: 'left',
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'count',
			legendOffset: -40,
			legendPosition: 'middle'
		}}
		colors={{ scheme: 'nivo' }}
		pointSize={10}
		pointColor={{ theme: 'background' }}
		pointBorderWidth={2}
		pointBorderColor={{ from: 'serieColor' }}
		pointLabel="y"
		pointLabelYOffset={-12}
		useMesh={true}
		legends={[
			{
				anchor: 'bottom-right',
				direction: 'column',
				justify: false,
				translateX: 100,
				translateY: 0,
				itemsSpacing: 0,
				itemDirection: 'left-to-right',
				itemWidth: 80,
				itemHeight: 20,
				itemOpacity: 0.75,
				symbolSize: 12,
				symbolShape: 'circle',
				symbolBorderColor: 'rgba(0, 0, 0, .5)',
				effects: [
					{
						on: 'hover',
						style: {
							itemBackground: 'rgba(0, 0, 0, .03)',
							itemOpacity: 1
						}
					}
				]
			}
		]}
	/>
)

const SingleUserPage = ({location}) => {
	const {first_name, last_name} = location.state;
	const [loading, setLoading] = useState(false);
	// const [data, setData] = useState([]);

	useEffect(async () => {
		setLoading(true);
		// const response = await request(`/usersendpoint?current_page=${pageIndex}&users_number=${pageSize}`);
		// const json = await response.json();
		// setData(json);
		// setData(data)
		setLoading(false)
	}, []);

	return (
		<div>
			<Header/>
			<Breadcrumbs
				separator={<b> > </b>}
				finalItem={'b'}
				duplicateProps={{to: 'href'}}
			/>

			<BreadcrumbsItem to='/'>Main page</BreadcrumbsItem>
			<BreadcrumbsItem to='/users'>User statistics</BreadcrumbsItem>
			<BreadcrumbsItem to='/user/1'>{`${first_name} ${last_name}`}</BreadcrumbsItem>
			<div style={{height: '20vh'}}>
				<MyResponsiveLine data={data} />
			</div>
		</div>
	);
};

export default SingleUserPage;
