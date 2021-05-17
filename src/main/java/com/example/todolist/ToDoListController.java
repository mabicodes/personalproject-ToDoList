package com.example.todolist;

import org.springframework.scheduling.config.Task;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ToDoListController {
    private List<Task> tasks;

    public ToDoListController() {
        tasks = new ArrayList<>();
    }

    //hay que quitar el import del task porq no me sirve igual, estan en el mismo archivo
    @GetMapping("/tasks")
    public List<Task> allTask() {return tasks;
    }

    @PostMapping("/tasks")
    public RedirectView addTask(Task tasks) {

        return new RedirectView("/");
    }
}

