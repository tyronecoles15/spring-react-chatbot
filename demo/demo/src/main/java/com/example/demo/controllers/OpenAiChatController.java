package com.example.demo.controllers;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OpenAiChatController {
    private final ChatClient chatClient;

    OpenAiChatController(ChatClient.Builder chatClientBuilder){
        this.chatClient= chatClientBuilder.build();
    }

    @GetMapping("chat/{message}")
    String getResponseBack(@PathVariable String message){
        return this.chatClient.prompt().user(message).call().content();
    }
}
