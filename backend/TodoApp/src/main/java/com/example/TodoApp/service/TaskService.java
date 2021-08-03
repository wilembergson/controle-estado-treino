package com.example.TodoApp.service;

import com.example.TodoApp.entity.Task;
import com.example.TodoApp.repository.TaskRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public Task save(Task task) throws Exception {
        if(task.getDescription() == ""){
            throw new Exception();
        }
        return repository.save(task);
    }

    public List<Task> listAll(){
        return repository.findAll();
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

    public Task update(Long id, Task task){
        Optional<Task> t = repository.findById(id);
        Task taskUp = t.get();

        taskUp.setDescription(task.getDescription());
        taskUp.setDone(task.getDone());

        return repository.save(taskUp);
    }
}
