package com.magret.service.impl;

import com.magret.entity.Contact;
import com.magret.repo.ContactRepo;
import com.magret.service.ContactService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import static com.magret.util.PhotoUrl.photoFunction;

@Service
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactRepo contactRepo;

    @Override
    public Page<Contact> getAllContact(int page , int size){
        return contactRepo.findAll(PageRequest.of(page , size , Sort.by("name")));
    }

    @Override
    public Contact getContact(String id){
        return contactRepo.findById(id).orElseThrow(() -> new RuntimeException("Contact Not Found"));
    }

    @Override
    public Contact createContact(Contact request){ return contactRepo.save(request); }

    @Override
    public void deleteContact(String id){
        contactRepo.delete(getContact(id));
    }

    @Override
    public String uploadPhoto(String id , MultipartFile file){
        var contact = getContact(id);
        String photoUrl = photoFunction.apply(id , file);
        contact.setPhotoUrl(photoUrl);
        contactRepo.save(contact);
        return photoUrl;
    }

}
