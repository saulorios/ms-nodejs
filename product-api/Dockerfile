FROM maven
WORKDIR .
COPY ./ ./
RUN mvn clean install -DskipTests
EXPOSE 8081
CMD ["mvn", "spring-boot:run"]