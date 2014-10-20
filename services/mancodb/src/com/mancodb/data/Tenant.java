
package com.mancodb.data;



/**
 *  mancodb.Tenant
 *  10/19/2014 10:36:56
 * 
 */
public class Tenant {

    private Integer idtenant;
    private String tenantName;
    private Integer dniTenant;
    private String country;
    private String address;
    private String telephone;

    public Integer getIdtenant() {
        return idtenant;
    }

    public void setIdtenant(Integer idtenant) {
        this.idtenant = idtenant;
    }

    public String getTenantName() {
        return tenantName;
    }

    public void setTenantName(String tenantName) {
        this.tenantName = tenantName;
    }

    public Integer getDniTenant() {
        return dniTenant;
    }

    public void setDniTenant(Integer dniTenant) {
        this.dniTenant = dniTenant;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

}
