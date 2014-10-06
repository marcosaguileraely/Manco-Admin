
package com.mancodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  mancodb.DocumentType
 *  10/06/2014 16:55:22
 * 
 */
public class DocumentType {

    private Integer iddocumentType;
    private String documentType;
    private Set<com.mancodb.data.Users> userses = new HashSet<com.mancodb.data.Users>();

    public Integer getIddocumentType() {
        return iddocumentType;
    }

    public void setIddocumentType(Integer iddocumentType) {
        this.iddocumentType = iddocumentType;
    }

    public String getDocumentType() {
        return documentType;
    }

    public void setDocumentType(String documentType) {
        this.documentType = documentType;
    }

    public Set<com.mancodb.data.Users> getUserses() {
        return userses;
    }

    public void setUserses(Set<com.mancodb.data.Users> userses) {
        this.userses = userses;
    }

}
