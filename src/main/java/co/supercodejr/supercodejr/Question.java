package co.supercodejr.supercodejr;

import javax.persistence.*;

@Entity
public class Question {

    @GeneratedValue
    @Id
    private long id;
    private String codeLanguage;
    @Lob
    @Column(length = 100000)
    private String beforeErrorCode;
    @Lob
    @Column(length = 100000)
    private String errorCode;
    @Lob
    @Column
    private String afterErrorCode;
    @Lob
    @Column(length = 100000)
    private String correctCodeBlock;
    @Lob
    @Column(length = 100000)
    private String iframeWrong;
    @Lob
    @Column(length = 100000)
    private String iframeCorrect;
    private String codeyStartingDialogue;
    @Lob
    private String codeyEndingDialogue;
    @Lob
    private String hintText;
    @Lob
    private String groundControlBeginningDialogue;
    @Lob
    private String wholeQuestionCompletedDialogue;

    protected Question (){}

    public Question(String codeLanguage, String beforeErrorCode, String errorCode, String afterErrorCode, String correctCodeBlock, String iframeWrong, String iframeCorrect, String codeyStartingDialogue, String codeyEndingDialogue, String hintText, String groundControlBeginningDialogue, String wholeQuestionCompletedDialogue) {

        this.codeLanguage = codeLanguage;
        this.beforeErrorCode = beforeErrorCode;
        this.errorCode = errorCode;
        this.afterErrorCode = afterErrorCode;
        this.correctCodeBlock = correctCodeBlock;
        this.iframeWrong = iframeWrong;
        this.iframeCorrect = iframeCorrect;
        this.codeyStartingDialogue = codeyStartingDialogue;
        this.codeyEndingDialogue = codeyEndingDialogue;
        this.hintText = hintText;
        this.groundControlBeginningDialogue = groundControlBeginningDialogue;
        this.wholeQuestionCompletedDialogue = wholeQuestionCompletedDialogue;
    }

    public long getId() {
        return id;
    }

    public String getCodeLanguage() {
        return codeLanguage;
    }

    public String getCodeyStartingDialogue() {
        return codeyStartingDialogue;
    }

    public String getCorrectCodeBlock() {
        return correctCodeBlock;
    }

    public String getBeforeErrorCode() {
        return beforeErrorCode;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public String getAfterErrorCode() {
        return afterErrorCode;
    }

    public String getIframeWrong() {
        return iframeWrong;
    }

    public String getIframeCorrect() {
        return iframeCorrect;
    }

    public String getCodeyEndingDialogue() {
        return codeyEndingDialogue;
    }

    public String getHintText() {
        return hintText;
    }

    public String getGroundControlBeginningDialogue() {
        return groundControlBeginningDialogue;
    }

    public String getWholeQuestionCompletedDialogue() {
        return wholeQuestionCompletedDialogue;
    }
}
