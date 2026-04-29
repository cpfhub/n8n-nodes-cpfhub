import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class CPFHub implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CPFHub',
		name: 'cpfHub',
		icon: 'file:cpfhub.svg',
		group: ['transform'],
		version: 1,
		description: 'Look up Brazilian CPF information',
		defaults: {
			name: 'CPFHub',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'cpfhubApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'CPF',
				name: 'cpf',
				type: 'string',
				default: '',
				placeholder: '000.000.000-00',
				required: true,
				description: 'The CPF number to look up (with or without formatting)',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			try {
				const cpf = this.getNodeParameter('cpf', i) as string;
				const credentials = await this.getCredentials('cpfhubApi');

				const options = {
					method: 'GET',
					uri: `https://api.cpfhub.io/v1/cpf/${cpf.replace(/\D/g, '')}`,
					headers: {
						'Authorization': `Bearer ${credentials.apiKey}`,
					},
					json: true,
				};

				const responseData = await this.helpers.request(options);
				returnData.push({ json: responseData });
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: error.message } });
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
