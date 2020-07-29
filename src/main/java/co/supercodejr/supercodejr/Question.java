package co.supercodejr.supercodejr;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.Collection;

public class Question {



    @GeneratedValue
    @Id
    private long id;

    private String codeLanguage;
    private String wholeQuestion;
    private String wrongCodeBlock;
    private String rightCodeBlock;
    private String codeyStartingDialogue;
    private String codeyEndingDialogue;
    private String hintText;
    private String wholeQuestionCompletedDialogue;

    public Question( String codeLanguage, String wholeQuestion,  String wrongCodeBlock, String rightCodeBlock, String codeyStartingDialogue, String codeyEndingDialogue, String hintText, String wholeQuestionCompletedDialogue) {

        this.codeLanguage = codeLanguage;
        this.wholeQuestion = wholeQuestion;
        this.wrongCodeBlock = wrongCodeBlock;
        this.rightCodeBlock = rightCodeBlock;
        this.codeyStartingDialogue = codeyStartingDialogue;
        this.codeyEndingDialogue = codeyEndingDialogue;
        this.hintText = hintText;
        this.wholeQuestionCompletedDialogue = wholeQuestionCompletedDialogue;
    }

    public String getCodeLanguage() {
        return codeLanguage;
    }

    public String getWholeQuestion() {
        return wholeQuestion;
    }


    public String getCodeyStartingDialogue() {
        return codeyStartingDialogue;
    }

    public String getRightCodeBlock() {
        return rightCodeBlock;
    }

    public String getWrongCodeBlock() {
        return wrongCodeBlock;
    }

    public String getCodeyEndingDialogue() {
        return codeyEndingDialogue;
    }

    public String getHintText() {
        return hintText;
    }

    public String getWholeQuestionCompletedDialogue() {
        return wholeQuestionCompletedDialogue;
    }
}
