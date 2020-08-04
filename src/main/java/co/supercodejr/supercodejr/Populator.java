package co.supercodejr.supercodejr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.File;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Arrays;

@Component
public class Populator implements CommandLineRunner {
    @Autowired
    QuestionRepo questionRepo;

    @Override
    public void run(String... args) throws Exception {
        String fileName = "src/main/resources/test/";
        File dir = new File(fileName);
        File[] dirFiles = dir.listFiles();
        Arrays.sort(dirFiles);
        for (File file : dirFiles) {
            String content = new String(Files.readAllBytes(file.toPath()));
            String[] testArray = content.split("###\\r?\\n");
            String codeLanguage = testArray[0];
            String beforeErrorCode = testArray[1];
            String errorCode = testArray[2];
            String afterErrorCode = testArray[3];
            String correctedError = testArray[4];
            String iframeWrong = testArray[5];
            String iframeCorrect = testArray[6];
            String codeyStartDialogue = testArray[7];
            String codeyEndingDialogue = testArray[8];
            String hintText = testArray[9];
            String groundControlBeginningDialogue = testArray[10];
            String groundControlCompletedDialogue = testArray[11];
            Question question = new Question(codeLanguage, beforeErrorCode, errorCode, afterErrorCode, correctedError, iframeWrong, iframeCorrect, codeyStartDialogue, codeyEndingDialogue, hintText, groundControlBeginningDialogue, groundControlCompletedDialogue);
            questionRepo.save(question);
        }
    }
}
