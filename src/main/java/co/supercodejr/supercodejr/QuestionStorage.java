package co.supercodejr.supercodejr;

import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class QuestionStorage {
    private QuestionRepo questionRepo;

    public QuestionStorage(QuestionRepo questionRepo) {
        this.questionRepo = questionRepo;
    }

    public QuestionRepo getQuestionRepo() {
        return questionRepo;
    }

    public Question save(Question question){
            return questionRepo.save(question);
        }

    public Question findQuestionById(Long id) {
        return questionRepo.findById(id).get();
    }

    public Collection<Question> retrieveAllQuestions() {
        return (Collection<Question>) questionRepo.findAll();
    }
}
