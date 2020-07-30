package co.supercodejr.supercodejr;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuestionController {

    QuestionStorage questionStorage;
    QuestionRepo questionRepo;

    public QuestionController(QuestionStorage questionStorage, QuestionRepo questionRepo) {
        this.questionStorage = questionStorage;
        this.questionRepo = questionRepo;
    }

    @GetMapping("/api/questions/{id}")
    public Question findQuestionById(@PathVariable Long id) {
        return questionStorage.findQuestionById(id);
    }
}
