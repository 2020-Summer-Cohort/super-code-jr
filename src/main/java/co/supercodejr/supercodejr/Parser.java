package co.supercodejr.supercodejr;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.lang.reflect.Array;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Parser {

    public static void main(String[] args) throws IOException {
        String fileName = "src/main/resources/test/";
        File dir = new File(fileName);
        File[] dirFiles = dir.listFiles();
        Arrays.sort(dirFiles);
        for (File file : dirFiles) {
            System.out.println(file.exists());
            String content = new String(Files.readAllBytes(file.toPath()));
            String[] testArray = content.split("###");
            String codeLanguage = testArray[0];
            String wholeQuestionBefore = testArray[1];
            String wholeQuestionAfter = testArray[2];
            String iframeWrong = testArray[3];
            String iframeCorrect = testArray[4];
            System.out.println(codeLanguage);
            System.out.println(wholeQuestionBefore);
            System.out.println(wholeQuestionAfter);
            System.out.println(iframeWrong);
            System.out.println(iframeCorrect);
//            for (String a : testArray) {
//                System.out.println(a);
//            }


            }


//            String[] item = data.split("###");
//            String codeLanguage = item[0];
//            String wholeQuestionBefore = item[1];
//            String wholeQuestionAfter = item[2];
//            String iframeWrong = item[3];
//            String iframeCorrect = item[4];
//            System.out.println(codeLanguage);
        }
        }



//        System.out.println(file.exists());
//        String content = new String(Files.readAllBytes(file.toPath()));
//        System.out.println(content);
//         String[] testArray = content.split("\\.");
//        System.out.println(testArray.length);
//        for (String a : testArray)
//            System.out.println(a);
//    }






