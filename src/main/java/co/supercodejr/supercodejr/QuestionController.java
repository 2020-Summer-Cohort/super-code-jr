package co.supercodejr.supercodejr;

import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin
@RestController
public class QuestionController {

    QuestionStorage questionStorage;
    QuestionRepo questionRepo;

    public QuestionController(QuestionStorage questionStorage, QuestionRepo questionRepo) {
        this.questionStorage = questionStorage;
        this.questionRepo = questionRepo;
    }
    @GetMapping("/api/questions/")
    public Collection<Question> findAllQuestions(){
        return questionStorage.retrieveAllQuestions();
    }
    @GetMapping("/api/questions/{id}")
    public Question findQuestionById(@PathVariable Long id) {
        return questionStorage.findQuestionById(id);
    }

    @PostMapping("/api/questions/submitQuestion")
    public Question addQuestion(@RequestBody Question question){
        questionStorage.save(question);
        return question;
    }
}


