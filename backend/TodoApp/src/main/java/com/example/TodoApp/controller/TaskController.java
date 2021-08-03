package com.example.TodoApp.controller;

import com.example.TodoApp.entity.Task;
import com.example.TodoApp.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/todoApp/task")
public class TaskController {

    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping("/listAll")
    public List<Task> findAll(){
        return service.listAll();
    }

    @PostMapping
    public ResponseEntity<Task> save(@RequestBody Task task) throws Exception {
        return ResponseEntity.ok(service.save(task));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id){
        service.delete(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> update(@PathVariable Long id, @RequestBody Task task){
        return ResponseEntity.ok(service.update(id, task));
    }
}
