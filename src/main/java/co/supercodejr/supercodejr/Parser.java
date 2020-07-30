package co.supercodejr.supercodejr;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.lang.reflect.Array;

public class Parser {

    public static void main(String[] args) throws IOException{
        String fileName = "C:\\Users\\green\\Documents\\WE Can Code IT\\Code\\super-code-jr\\src\\main\\resources\\test\\test.txt";
//        ClassLoader classLoader = ClassLoader.getSystemClassLoader();
        File file = new File(fileName);
        System.out.println(file.exists());
        String content = new String(Files.readAllBytes(file.toPath()));
        System.out.println(content);
         String[] testArray = content.split("\\.");
        System.out.println(testArray.length);
        for (String a : testArray)
            System.out.println(a);
    }
}





