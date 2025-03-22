#!/usr/bin/env node
import React from 'react';
import {render, Box, Text} from 'ink';
import {Education, WorkExperience, Projects} from './sections.js';

export function Home() {
	return	(
		<Box flexDirection='column' borderStyle='classic'>
			<Box justifyContent='center'>
				<Text>
					{'Jiong '}
					<Text bold color='red'>Huang</Text>
				</Text>
			</Box>

			<WorkExperience
				experiences={[
					{
						company: 'InsightFinder',
						location: 'Durham, NC, United States',
						title: 'UI Engineer',
						from: 'Mar, 2025',
						to: 'Present',
					},
					{
						company: 'NextBillion.ai',
						location: 'Singapore',
						title: 'Full-Stack Engineer',
						from: 'Jun, 2023',
						to: 'Mar, 2024',
					},
					{
						company: 'data.ai',
						location: 'Beijing',
						title: 'Senior Front-End Engineer',
						from: 'Mar, 2021',
						to: 'Jun, 2023',
					},
					{
						company: 'Beijing Ark Reading Technology Co., Ltd.',
						location: 'Beijing',
						title: 'Front-End Engineer',
						from: 'May, 2020',
						to: 'Mar, 2021',
					},
					{
						company: 'Grab Technology (Beijing) Co., Ltd.',
						location: 'Beijing',
						title: 'Full-Stack Engineer',
						from: 'Jan, 2018',
						to: 'May, 2020',
					},
					{
						company: 'Legolova (Beijing) Technology Co., Ltd.',
						location: 'Beijing',
						title: 'Node.js & PHP Engineer',
						from: 'Aug, 2016',
						to: 'Sep, 2017',
					},
					{
						company: 'Huanlv International Information Technology (Beijing) Co., Ltd.',
						location: 'Beijing',
						title: 'PHP Engineer',
						from: 'Feb, 2016',
						to: 'Jul, 2016',
					},
				]}
			/>

			<Projects
				projects={[
					{
						name: 'raycast/litomore-cli',
						description: 'Project for this resume',
						tags: ['TypeScript', 'React', 'CLI'],
						role: 'Owner',
					},
					{
						name: 'SBoudrias/Inquirer.js',
						description: 'A collection of common interactive command line user interfaces',
						tags: ['JavaScript', 'CLI'],
						role: 'Collaborator',
					},
					{
						name: 'simple-icons/simple-icons',
						description: 'SVG icon for popular brands',
						tags: ['JavaScript', 'SVG'],
						role: 'Member',
					},
					{
						name: 'netless-io/flat',
						description: 'Open-source classroom app built with Electron',
						tags: ['TypeScript', 'Electron'],
						role: 'Member',
					},
					{
						name: 'raycast/extensions',
						description: 'Everything you need to extend Raycast',
						tags: ['TypeScript', 'React'],
						role: 'Official-Invited Reviewer',
					},
				]}
			/>

			<Education />
		</Box>
	);
}

render(<Home/>);
