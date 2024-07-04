package com.magret.util;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.function.BiFunction;
import java.util.function.Function;

import static com.magret.constant.Directory.PHOTO_DIRECTORY;
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;

public class PhotoUrl {

    private static final Function<String , String> getFileExtension = fileName ->
            Optional.of(fileName)
                    .filter(name -> name.contains("."))
                    .map(name -> "."+name.substring(fileName.lastIndexOf(".")+1))
                    .orElse(".png");

    public static final BiFunction<String , MultipartFile , String> photoFunction = (id , image) -> {
        String fileName = id + getFileExtension.apply(image.getOriginalFilename());
        try{
            Path fileStorageLocation = Paths.get(PHOTO_DIRECTORY).toAbsolutePath().normalize();
            if(!Files.exists(fileStorageLocation)){ Files.createDirectories(fileStorageLocation); }
            Files.copy(image.getInputStream() , fileStorageLocation.resolve(fileName) , REPLACE_EXISTING);
            return ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/contacts/image/"+fileName)
                    .toUriString();
        } catch(Exception exception){
            throw new RuntimeException("Unable to save Image");
        }
    };


}
