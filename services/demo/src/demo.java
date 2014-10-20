import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

import com.mancodb.*;
import org.hibernate.Session;
import com.wavemaker.runtime.RuntimeAccess;

import com.wavemaker.runtime.server.DownloadResponse;
import java.net.URL;
import net.sf.jasperreports.engine.util.JRLoader;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import java.io.ByteArrayOutputStream;
import java.io.ByteArrayInputStream;
import java.util.Map;
import java.util.HashMap;

import com.wavemaker.runtime.server.ParamName;

import org.springframework.mail.javamail.ConfigurableMimeFileTypeMap;

import net.sf.jasperreports.engine.JRResultSetDataSource;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import java.util.*;
import java.io.*;
import com.wavemaker.runtime.RuntimeAccess;


@ExposeToClient
public class demo extends JavaServiceSuperClass {
    public DownloadResponse getReport() throws Exception {
       DownloadResponse ret= new DownloadResponse();
       ConfigurableMimeFileTypeMap mimeFileTypeMap = new ConfigurableMimeFileTypeMap();
       
       try {
          Mancodb service = (Mancodb) RuntimeAccess.getInstance().getService(Mancodb.class);
          service.begin();
          Session session= service.getDataServiceManager().getSession();
          
          //enviar parametros al reporte
          Map parameters= new HashMap();
          System.out.println("capturados!");
          
          //direccion del archivo Jasper
          URL fileUrl = this.getClass().getResource("demo.jasper");
          System.out.println("1");
          //para cargar el jasper
          JasperReport report2 = (JasperReport)JRLoader.loadObject(fileUrl);
          System.out.println("2");
          //cargar conexion de la base de datos al reporte y el archivo Jasper
          JasperPrint jasperPrint = JasperFillManager.fillReport(report2,parameters,session.connection());
          System.out.println("3");
          //exportar a pdf
          ByteArrayOutputStream out= new ByteArrayOutputStream();
          System.out.println("4");
          JasperExportManager.exportReportToPdfStream(jasperPrint, out);
          System.out.println("5");
          //cargar pdf como una respuesta de descarga
          ret.setContentType(mimeFileTypeMap.getContentType("demo.jasper"));
          ret.setContents(new ByteArrayInputStream(out.toByteArray()));
          ret.setFileName("demo.pdf");
          
       } catch(Exception e) {
          System.out.println("Error creando el PDF");
          e.printStackTrace();
       }
       return ret;
    }

}
