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
    @Autowired QuestionRepo questionRepo;

    @Override
    public void run(String... args) throws Exception {

        String fileName = "src/main/resources/test/";
        File dir = new File(fileName);
        File[] dirFiles = dir.listFiles();
        Arrays.sort(dirFiles);
        for (File file : dirFiles) {
            String content = new String(Files.readAllBytes(file.toPath()));
            String[] testArray = content.split("###");
            String codeLanguage = testArray[0];
            String wholeQuestionBefore = testArray[1];
            String wholeQuestionAfter = testArray[2];
            String iframeWrong = testArray[3];
            String iframeCorrect = testArray[4];
            Question question = new Question(codeLanguage, wholeQuestionBefore, wholeQuestionAfter, iframeWrong, iframeCorrect, "", "", "");
            questionRepo.save(question);
        }

        Question question1 = new Question("JavaScript",
                "export{\n" +
                        "    createHeader\n" +
                        "const createHeader = () => {\n" +
                        "    const header = document.createElement(\"header\");\n" +
                        "    header.classList.add('header');\n" +
                        "    header.innerHTML = '<h1>Meet the Developers</h1>'\n" +
                        "    return header;\n" +
                        "}\n" +
                        "export {\n" +
                        "    createFooter\n" +
                        "}\n" +
                        "const createFooter = () => {\n" +
                        "    const footer = document.createElement(\"footer\");\n" +
                        "    footer.classList.add('footer');\n" +
                        "    footer.innerHTML = '<h5>Super Coder Jr. | 2020</h5>'\n" +
                        "    return footer;\n" +
                        "} ",
                "export{\n\" +\n" +
                "                        \"    createHeader\n",
                "export{\n\" +\n" +
                "                        \"    createHeader}\n",
                "This is the first Question!",
                "Well done! Always make sure you close your brackets.",
                "Check your brackets!",
                "You've solved my HTML puzzle!") ;

                questionRepo.save(question1);
    }
}
