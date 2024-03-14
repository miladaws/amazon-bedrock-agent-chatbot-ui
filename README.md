# Chatbot UI for Amazon Bedrock Agent 

This is an chatbot UI designed by Ionic to demonstrate the integration with Amazon Bedrock Agent using the AWS SDK. 

### Prerequisites

- Node.js and npm (Node Package Manager)
- Ionic CLI
- AWS account and configured AWS CLI

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ionic-aws-project.git

## Installation

1. Navigate to the project directory:
cd ionic-aws-project

2. Install dependencies:
npm install

3. Install the AWS SDK package:
npm install @aws-sdk/client-bedrock-agent-runtime

4. Initialize the Ionic app:
ionic serve

5. Setting Up Environment Variables:Configuration

To set up your environment, please create two files within the src directory:

1) Development Environment File: In src/environments/environment.ts, insert the following code, ensuring to substitute placeholders with your actual values:

export const environment = {
  production: false,
  region: 'YOUR_REGION',
  agentID: 'YOUR_AGENT_ID',
  agentAliasID: 'YOUR_AGENT_ALIAS_ID',
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
};

2) Production Environment File: For the production environment, create src/environments/environment.prod.ts with this content:
export const environment = {
  production: true,
};

Please note, for security purposes, the environments folder is included in the .gitignore file to prevent its contents from being uploaded to the repository.



