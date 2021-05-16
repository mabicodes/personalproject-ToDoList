package com.example.todolist;

public class Task {
    private final String taskList;

    public Task(String taskList){
        this.taskList = taskList;
    }
    public String getTask() {
        return taskList;
    }
}

