import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class CPFHubApi implements ICredentialType {
	name = 'cpfhubApi';
	displayName = 'CPFHub API';
	documentationUrl = 'https://cpfhub.io/docs';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The API Key for CPFHub.io',
		},
	];
}
