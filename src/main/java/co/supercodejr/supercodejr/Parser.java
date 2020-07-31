package co.supercodejr.supercodejr;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.lang.reflect.Array;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;

public class Parser {

    public static void main(String[] args) throws IOException {
        String fileName = "src/main/resources/test/";
        File dir = new File(fileName);
        File[] dirFiles = dir.listFiles();
        Arrays.sort(dirFiles);
        for (File file : dirFiles) {
            System.out.println(file.exists());
            String content = new String(Files.readAllBytes(file.toPath()));
//            Files.list(Paths.get(String.valueOf(dir))).sorted().forEach(System.out::println);
            System.out.println(content);
        }
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






