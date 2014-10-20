
package com.mancodb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  mancodb.Users
 *  10/19/2014 10:36:56
 * 
 */
public class Users {

    private Integer idusers;
    private UserType userType;
    private DocumentType documentType;
    private Integer noDocument;
    private String name;
    private String lastname;
    private String user;
    private String pwd;
    private Date createdDate;
    private Date updatedDate;
    private Integer tenantId;
    private Set<com.mancodb.data.Issues> issueses = new HashSet<com.mancodb.data.Issues>();

    public Integer getIdusers() {
        return idusers;
    }

    public void setIdusers(Integer idusers) {
        this.idusers = idusers;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    public DocumentType getDocumentType() {
        return documentType;
    }

    public void setDocumentType(DocumentType documentType) {
        this.documentType = documentType;
    }

    public Integer getNoDocument() {
        return noDocument;
    }

    public void setNoDocument(Integer noDocument) {
        this.noDocument = noDocument;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public Integer getTenantId() {
        return tenantId;
    }

    public void setTenantId(Integer tenantId) {
        this.tenantId = tenantId;
    }

    public Set<com.mancodb.data.Issues> getIssueses() {
        return issueses;
    }

    public void setIssueses(Set<com.mancodb.data.Issues> issueses) {
        this.issueses = issueses;
    }

}
