
package com.mancodb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  mancodb.UserType
 *  10/19/2014 10:36:56
 * 
 */
public class UserType {

    private Integer iduserType;
    private String userType;
    private Set<com.mancodb.data.Users> userses = new HashSet<com.mancodb.data.Users>();

    public Integer getIduserType() {
        return iduserType;
    }

    public void setIduserType(Integer iduserType) {
        this.iduserType = iduserType;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public Set<com.mancodb.data.Users> getUserses() {
        return userses;
    }

    public void setUserses(Set<com.mancodb.data.Users> userses) {
        this.userses = userses;
    }

}
