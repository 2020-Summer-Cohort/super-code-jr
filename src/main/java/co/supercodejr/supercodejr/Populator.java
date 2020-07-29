package co.supercodejr.supercodejr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class Populator implements CommandLineRunner {
    @Autowired QuestionRepo questionRepo;



    @Override
    public void run(String... args) throws Exception {



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


    }
}
