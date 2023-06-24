import React, {Fragment} from 'react';
import {Box, Text} from 'ink';

export const Education = () => (
	<Box
		flexDirection='column'
		borderStyle='round'
		marginLeft={1}
		marginRight={1}
		paddingLeft={1}
		paddingRight={1}
	>
		<Text bold color='red'>Education</Text>
		<Box justifyContent='space-between'>
			<Text bold>Institue of Information Technology of GUET</Text>
			<Text color='red'>Guilin, China</Text>
		</Box>
		<Box justifyContent='space-between'>
			<Text>Software Engineering (Computer Science and Technology)</Text>
			<Text>Jul, 2016</Text>
		</Box>
	</Box>
);

type Experience = {
	company: string;
	location: string;
	title: string;
	from: string;
	to?: string;
};

export const WorkExperience = ({experiences}: {experiences: Experience[]}) => (
	<Box
		flexDirection='column'
		borderStyle='round'
		marginLeft={1}
		marginRight={1}
		paddingLeft={1}
		paddingRight={1}
	>
		<Text bold color='red'>Work Experience</Text>

		{experiences.map(({company, location, title, from, to = 'Present'}, index) => (
			<Fragment key={company}>
				<Box justifyContent='space-between' marginTop={index > 0 ? 1 : 0}>
					<Text bold>{company}</Text>
					<Text color='red'>{location}</Text>
				</Box>
				<Box justifyContent='space-between'>
					<Text>{title}</Text>
					<Text>{from} - {to}</Text>
				</Box>
			</Fragment>
		))}
	</Box>
);

type Project = {
	name: string;
	description: string;
	tags: string[];
	role: string;
};

export const Projects = ({projects}: {projects: Project[]}) => (
	<Box
		flexDirection='column'
		borderStyle='round'
		marginLeft={1}
		marginRight={1}
		paddingLeft={1}
		paddingRight={1}
	>
		<Text bold color='red'>Projects</Text>

		{projects.map(({name, description, tags, role}, index) => (
			<Fragment key={name}>
				<Box justifyContent='space-between' marginTop={index > 0 ? 1 : 0}>
					<Text bold>{name}</Text>
					<Text color='cyan'>{tags.join(', ')}</Text>
				</Box>
				<Box justifyContent='space-between'>
					<Text>{description}</Text>
					<Text>{role}</Text>
				</Box>
			</Fragment>
		))}

		<Box justifyContent='space-between' marginTop={1}>
			<Text bold>SBoudrias/Inquirer.js</Text>
			<Text color='cyan'>JavaScript, CLI</Text>
		</Box>
		<Box justifyContent='space-between'>
			<Text>A collection of common interactive command line user interfaces</Text>
			<Text>Collaborator</Text>
		</Box>

		<Box justifyContent='space-between' marginTop={1}>
			<Text bold>simple-icons/simple-icons</Text>
			<Text color='cyan'>JavaScript</Text>
		</Box>
		<Box justifyContent='space-between'>
			<Text>SVG icon for popular brands</Text>
			<Text>Member</Text>
		</Box>

		<Box justifyContent='space-between' marginTop={1}>
			<Text bold>netless-io/flat</Text>
			<Text color='cyan'>TypeScript, Electron</Text>
		</Box>
		<Box justifyContent='space-between'>
			<Text>Open-source classroom app built with Electron</Text>
			<Text>Member</Text>
		</Box>
	</Box>
);
