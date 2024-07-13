package com.magret.resource;

import com.magret.constant.Directory;
import com.magret.entity.Contact;
import com.magret.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Paths;

import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;
import static org.springframework.http.MediaType.IMAGE_PNG_VALUE;

@RestController
@RequiredArgsConstructor
@RequestMapping("/contacts")
public class ContactController {

    private final ContactService contactService;


    @PostMapping
    public ResponseEntity<Contact> createContact(
            @RequestBody Contact request
    )
    {
        return ResponseEntity.created(URI.create("/contacts/userID")).body(contactService.createContact(request));
    }

    @GetMapping
    public ResponseEntity<Page<Contact>> getContacts(
            @RequestParam(value = "page" , defaultValue = "0") int page ,
            @RequestParam(value = "size" , defaultValue = "10") int size
    )
    {
        return ResponseEntity.ok().body(contactService.getAllContact(page , size));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contact> getContactById(
            @PathVariable(value = "id") String id
    )
    {
        return ResponseEntity.ok().body(contactService.getContact(id));
    }

    @PutMapping("/photo")
    public ResponseEntity<String> uploadPhoto(
            @RequestParam(value = "id") String id,
            @RequestParam(value = "file") MultipartFile file
    )
    {
        return ResponseEntity.ok().body(contactService.uploadPhoto(id , file));
    }

    @GetMapping(path = "/image/{filename}" , produces = { IMAGE_PNG_VALUE , IMAGE_JPEG_VALUE })
    public byte [] getPhoto(
            @PathVariable(value = "filename") String filename
    ) throws Exception
    {
        return Files.readAllBytes(Paths.get(Directory.PHOTO_DIRECTORY+filename));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteContact(
            @PathVariable(value = "id") String id
    )
    {
        contactService.deleteContact(id);
        return ResponseEntity.ok().body("Contact Deleted Successfully");
    }
}
