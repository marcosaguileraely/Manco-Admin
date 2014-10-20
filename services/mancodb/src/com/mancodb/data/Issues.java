
package com.mancodb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  mancodb.Issues
 *  10/19/2014 10:36:56
 * 
 */
public class Issues {

    private Integer issueId;
    private Users users;
    private String name;
    private String description;
    private Date issueDate;
    private Date issueTime;
    private Date issueDateUpdate;
    private String urlPic;
    private String reporter;
    private String prioridad;
    private Set<com.mancodb.data.IssueHistory> issueHistories = new HashSet<com.mancodb.data.IssueHistory>();

    public Integer getIssueId() {
        return issueId;
    }

    public void setIssueId(Integer issueId) {
        this.issueId = issueId;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(Date issueDate) {
        this.issueDate = issueDate;
    }

    public Date getIssueTime() {
        return issueTime;
    }

    public void setIssueTime(Date issueTime) {
        this.issueTime = issueTime;
    }

    public Date getIssueDateUpdate() {
        return issueDateUpdate;
    }

    public void setIssueDateUpdate(Date issueDateUpdate) {
        this.issueDateUpdate = issueDateUpdate;
    }

    public String getUrlPic() {
        return urlPic;
    }

    public void setUrlPic(String urlPic) {
        this.urlPic = urlPic;
    }

    public String getReporter() {
        return reporter;
    }

    public void setReporter(String reporter) {
        this.reporter = reporter;
    }

    public String getPrioridad() {
        return prioridad;
    }

    public void setPrioridad(String prioridad) {
        this.prioridad = prioridad;
    }

    public Set<com.mancodb.data.IssueHistory> getIssueHistories() {
        return issueHistories;
    }

    public void setIssueHistories(Set<com.mancodb.data.IssueHistory> issueHistories) {
        this.issueHistories = issueHistories;
    }

}
