package com.magret.service;

import com.magret.entity.Contact;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

public interface ContactService {
    Page<Contact> getAllContact(int page , int size);
    Contact getContact(String id);
    Contact createContact(Contact request);
    void deleteContact(String id);
    String uploadPhoto(String id , MultipartFile file);
}
