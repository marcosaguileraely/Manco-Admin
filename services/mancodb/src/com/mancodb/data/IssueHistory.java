
package com.mancodb.data;

import java.util.Date;


/**
 *  mancodb.IssueHistory
 *  10/06/2014 16:55:22
 * 
 */
public class IssueHistory {

    private Integer idissueHistory;
    private Issues issues;
    private String state;
    private String reporter;
    private String comment;
    private Date createdDate;
    private Date createdTime;
    private Date updatedDate;
    private String picsHistory;

    public Integer getIdissueHistory() {
        return idissueHistory;
    }

    public void setIdissueHistory(Integer idissueHistory) {
        this.idissueHistory = idissueHistory;
    }

    public Issues getIssues() {
        return issues;
    }

    public void setIssues(Issues issues) {
        this.issues = issues;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getReporter() {
        return reporter;
    }

    public void setReporter(String reporter) {
        this.reporter = reporter;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getPicsHistory() {
        return picsHistory;
    }

    public void setPicsHistory(String picsHistory) {
        this.picsHistory = picsHistory;
    }

}
