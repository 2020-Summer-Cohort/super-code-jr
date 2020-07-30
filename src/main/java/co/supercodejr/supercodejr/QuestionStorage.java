package co.supercodejr.supercodejr;

import org.springframework.stereotype.Service;

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

}
