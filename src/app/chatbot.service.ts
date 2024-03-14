import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { BedrockAgentRuntimeClient, InvokeAgentCommand } from "@aws-sdk/client-bedrock-agent-runtime";

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  async invokeAgent(prompt: string, sessionId: string) {
    const client = new BedrockAgentRuntimeClient({
      region: environment.region, 
      credentials: {
        accessKeyId: environment.accessKeyId,
        secretAccessKey: environment.secretAccessKey,
        }
      });

    let agentId = environment.agentID
    let agentAliasId = environment.agentAliasID

    const command = new InvokeAgentCommand({
      agentId,
      agentAliasId,
      sessionId,
      inputText: prompt,
    });

    try {
      let completion = "";
      const response = await client.send(command);

      if (response.completion === undefined) {
        throw new Error("Completion is undefined");
      }

      for await (let chunkEvent of response.completion) {
        let chunk: any
        chunk = chunkEvent.chunk;
        const decodedResponse = new TextDecoder("utf-8").decode(chunk.bytes);
        completion += decodedResponse;
      }
      return completion

    } catch (err) {
      console.error(err);
      return "Something went wrong. Please try later."
    }
  }

}
